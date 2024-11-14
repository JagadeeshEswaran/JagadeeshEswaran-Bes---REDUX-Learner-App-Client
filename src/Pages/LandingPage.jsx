import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import { saveLearnerInfo } from "../features/learnerSlice";
import axios from "axios";
import { useEffect } from "react";

const LandingPage = () => {
  const dispatch = useDispatch()

  const fetchData = async (username) => {
    if (!username) return

    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/?username=${username}`,
        {
          headers: {
            "x-api-key": "BESANT_STUDENT_TEST_SERVER_ACCESS_TOKEN_JULY2024",
          },
        }
      );

      // console.log(response.data.data);
      return dispatch(saveLearnerInfo(response.data.data));
    } catch (error) {
      console.log(error);
      return alert(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"))
    // console.log(username);

    username && fetchData(username)
  }, [])

  return (
    <section
      className="bg-light position-relative"
      style={{ overflowX: "hidden" }}
    >
      <Navbar />

      <MainSection />

      <Footer />
    </section>
  );
};

export default LandingPage;
