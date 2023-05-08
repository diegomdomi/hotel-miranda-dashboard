import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { HiPhone } from "react-icons/hi";
import { BsChatText } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import img from "../Assets/room4.jpg";
import { Spinner } from "./Spinner";
import { useEffect } from "react";
import { getSingleBooking } from "../Redux/bookingsSlice.js";
import { useParams } from "react-router-dom";

const BookingsDetails = ({ measure }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const bookingSingleStore = useSelector(
    (state) => state.bookingsSlice.singleBooking
  );

  useEffect(() => {
    dispatch(getSingleBooking(Number(id)));
  }, []);

  return (
    <>
      {!bookingSingleStore ? (
        <Spinner></Spinner>
      ) : (
        <BookingsDetailsContainer margin={measure ? "350px" : "50px"}>
          <DataContainer>
            <MainDataContainer>
              <MainDivTitle>
                <ImageContainer>
                  <img src={bookingSingleStore.img} alt="pic" />
                </ImageContainer>
                <MainDataBookings>
                  <TitleBookings>{bookingSingleStore.Guest}</TitleBookings>
                  <IdBookings>
                    ID {bookingSingleStore.id} /1234124512551
                  </IdBookings>
                  <ContactBookings>
                    <IconPhoneContainer>
                      <HiPhone></HiPhone>
                    </IconPhoneContainer>
                    <SendMessageButton>
                      <IconChatContainer>
                        <BsChatText />
                      </IconChatContainer>
                      Send Message
                    </SendMessageButton>
                  </ContactBookings>
                </MainDataBookings>
              </MainDivTitle>
              <CheckinOutDataContainer>
                <CheckinDataContainer margin={"110px"}>
                  <CheckinDataSpan>Check in</CheckinDataSpan>
                  <CheckinDataDate>
                    {bookingSingleStore.Check_in} | 08:23 AM
                  </CheckinDataDate>
                </CheckinDataContainer>
                <CheckinDataContainer>
                  <CheckinDataSpan>Check out</CheckinDataSpan>
                  <CheckinDataDate>
                    {bookingSingleStore.Check_out}
                  </CheckinDataDate>
                </CheckinDataContainer>
              </CheckinOutDataContainer>
              <Line></Line>
              <CheckinOutDataContainer>
                <CheckinDataContainer margin={"200px"}>
                  <CheckinDataSpan>Room info</CheckinDataSpan>
                  <CheckinDataDate>
                    {bookingSingleStore.Room_type}
                  </CheckinDataDate>
                </CheckinDataContainer>
                <CheckinDataContainer>
                  <CheckinDataSpan>Price</CheckinDataSpan>
                  <CheckinDataDate>$145/night</CheckinDataDate>
                </CheckinDataContainer>
              </CheckinOutDataContainer>
              <MainParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </MainParagraph>
              <AmenitiesTitle>Amenities</AmenitiesTitle>
              <AmenitiesContainer>
                <AmenitiesList>
                  <AmenitiesIconContainer>
                    <BiBed />
                  </AmenitiesIconContainer>
                  3 Bed Space
                </AmenitiesList>
                <AmenitiesList>
                  <AmenitiesIconContainer>
                    <MdSecurity></MdSecurity>
                  </AmenitiesIconContainer>
                  24 Hours Guard
                </AmenitiesList>
                <AmenitiesList>
                  <AmenitiesIconContainer>
                    <AiOutlineWifi size={18} />
                  </AmenitiesIconContainer>
                  Free Wifi
                </AmenitiesList>
                <AmenitiesList>2 Bathroom</AmenitiesList>
                <AmenitiesList>Air Conditioner</AmenitiesList>
                <AmenitiesList>Television</AmenitiesList>
              </AmenitiesContainer>
            </MainDataContainer>
          </DataContainer>
          <ImageRightContainer>
            <img src={img} alt="img" />
          </ImageRightContainer>
        </BookingsDetailsContainer>
      )}
    </>
  );
};

export default BookingsDetails;

const BookingsDetailsContainer = styled.div`
  ${"" /* width: 1475px; */}
  ${"" /* height: 792px; */}
    margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0px 3px 10px #00000005;
  margin-top: 127px;
  margin-left: ${(props) => props.margin};
  transition: margin-left 0.5s;
  margin-right: 100px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
`;
const DataContainer = styled.div`
  width: 50%;
`;
const MainDataContainer = styled.div``;
const MainDivTitle = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 40px;
  gap: 30px;
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 25px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;
const MainDataBookings = styled.div``;
const TitleBookings = styled.p`
  text-align: left;
  font: normal normal 600 30px/46px Poppins;
  margin: 0 auto;
`;
const IdBookings = styled.p`
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  color: #799283;
`;
const ContactBookings = styled.div`
  display: flex;
`;
const IconPhoneContainer = styled.div`
  width: 59px;
  height: 39px;
  border: 1px solid #e8f2ef;
  border-radius: 12px;
  margin-right: 16px;
  :first-child {
    padding-top: 16px;
  }
`;

const SendMessageButton = styled.button`
  width: 200px;
  height: 49px;
  border-radius: 12px;
  background-color: #135846;
  color: #fff;
  border: none;
  margin-right: 5px;
`;
const IconChatContainer = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;
const CheckinOutDataContainer = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 5%;
`;
const CheckinDataContainer = styled.div`
  text-align: left;
  margin-right: ${(props) => props.margin};
`;
const CheckinDataSpan = styled.p`
  color: #6e6e6e;
  font: normal normal normal 14px Poppins;
`;
const CheckinDataDate = styled.p`
  font-size: 24px 
  font-family:Poppins;
  font-weight: bolder;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: #e8d8d8;
  margin-top: 35px;
  margin-left: 5%;
`;
const MainParagraph = styled.p`
  width: 80%;
  margin-left: 5%;
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #363636;
`;
const AmenitiesTitle = styled.p`
  width: 40%;
  margin-left: 5%;
  margin-top: 60px;
  text-align: left;
  color: #6e6e6e;
  font: normal normal normal 14px Poppins;
`;
const AmenitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
  gap: 20px;
  padding-bottom: 50px;
`;

const AmenitiesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  width: 209px;
  height: 59px;
  background-color: #e8f2ef;
  color: #135846;
`;

const AmenitiesIconContainer = styled.div``;
const ImageRightContainer = styled.div`
  ${"" /* width:100%; */}
  height:100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
