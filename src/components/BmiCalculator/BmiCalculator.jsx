import React, { useEffect, useState } from "react";
import "./BmiCalculator.css";
import icon1 from "../../assets/diet 1.png";
import icon2 from "../../assets/chatbot 1.png";
import icon3 from "../../assets/stats-2 1.png";

const BmiCalculator = () => {
  const [bmiResult, setBmiResult] = useState("");
  const calculateBmi = (e) => {
    e.preventDefault();
    setBmiResult("");
    const form = e.target;
    const height = parseFloat(form.height.value);
    const weight = parseFloat(form.weight.value);

    let bmiValue = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmiValue < 18.5) {
      setBmiResult("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiResult("Normal weight");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBmiResult("Overweight");
    } else {
      setBmiResult("Obese");
    }
    form.reset();
  };

  useEffect(() => {
    setTimeout(() => {
      if (bmiResult) setBmiResult("");
    }, 5000);
  }, [bmiResult]);

  return (
    <div className="container bmi-calc mt-3">
      <h4 className="section-title">FEATURES WE PROVIDE</h4>

      <div className="d-flex align-items-start">
        <div className="left-side">
          <h1>
            Calculating BMI <br /> is easier.
          </h1>

          <p>
            We calculate your BMI index from data like <br /> age, height,
            weight.
          </p>

          <div className="mt-5 mb-4">
            <h4 className="section-title m-0 fw-semibold fs-4">
              We also help you with
            </h4>
          </div>

          <div className="features-ops flex-center align-items-start">
            <div className="pt-2 me-2 shadow-lg">
              <img src={icon1} alt="" style={{ height: "50px" }} />
              <h5>Food Choice</h5>
              <p>
                We provide food recommendation according to your calorie
                requirements.
              </p>
            </div>

            <div className="me-2">
              <img src={icon2} alt="" />
              <h5>Interactive Chatbot</h5>
              <p>
                Solve your interesting and curious queries by interacting with
                our bot.
              </p>
            </div>

            <div className="">
              <img src={icon3} alt="" />
              <h5>Nutritional Value</h5>
              <p>
                Get all the nutritional values of your preferred dish
                specifically detailed and nurtured for you.
              </p>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h4 className="fs-2 fw-semibold ">
            Calculate Your BMI(Body Mass Index)
          </h4>
          <p>
            Your BMI calculator generates the number of calories your body burns
            per day at rest. Your BMR with activity factor is the number of
            calories your body burns per day based on the activity factor you
            selected.
          </p>

          <form
            action=""
            name="bmi-form"
            onSubmit={calculateBmi}
            className="bmi-form"
          >
            <div className="flex-between mb-4">
              <input
                type="text"
                name="height"
                id=""
                placeholder="Height/cm"
                className=""
                required
              />
              <input
                type="text"
                name="weight"
                id=""
                placeholder="Weight/kg"
                className=""
                required
              />
            </div>
            <div className="flex-between  mb-4">
              <input type="text" name="" id="" placeholder="Age" />
              <select name="Sex" id="">
                <option defaultValue disabled>
                  Sex
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <select name="" id="" style={{ width: "100%" }}>
              <option defaultValue disabled>
                Select an activity factor
              </option>
              <option value="">Little or no Exercise/ desk job</option>
              <option value="">Light exercise/ sports 1 – 3 days/ week</option>
              <option value="">
                Moderate Exercise, sports 3 – 5 days/ week
              </option>
              <option value="">Heavy Exercise/ sports 6 – 7 days/ week</option>
            </select>
            <br />

            <div className="flex-center justify-content-start mt-5">
              <button type="submit" className="bmi-calc-btn">
                Calculate
              </button>

              <p className="m-0 ps-3 text-success fw-bold fs-5">
                {bmiResult && `You are: ${bmiResult}!`}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
