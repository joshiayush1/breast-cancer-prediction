import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Prediction = () => {
    const [formData, setFormData] = useState({
        diagnosis: '',
        radius_mean: '',
        texture_mean: '',
        perimeter_mean: '',
        area_mean: '',
        smoothness_mean: '',
        compactness_mean: '',
        concavity_mean: '',
        concave_points_mean: '',
        symmetry_mean: '',
        fractal_dimension_mean: '',
        radius_se: '',
        texture_se: '',
        perimeter_se: '',
        area_se: '',
        smoothness_se: '',
        compactness_se: '',
        concavity_se: '',
        concave_points_se: '',
        symmetry_se: '',
        fractal_dimension_se: '',
        radius_worst: '',
        texture_worst: '',
        perimeter_worst: '',
        area_worst: '',
        smoothness_worst: '',
        compactness_worst: '',
        concavity_worst: '',
        concave_points_worst: '',
        symmetry_worst: '',
        fractal_dimension_worst: '',
    });
    const handleFormData = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }
    
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { diagnosis, ...otherData } = formData;
        const features = Object.values(otherData).map(val => parseFloat(val));
        
        if (features.some(isNaN)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }
        
        console.log('Sending data to Flask:', { features });
        
        try {
            const response = await axios.post("http://localhost:5000/predict", { features });
            console.log(response.data);
            navigate("/predicted-result", {
            state: {
            prediction: response.data.prediction,
            },
        });
        } catch (error) {
        console.error("Error making prediction:", error);
        }
    };
    

  return (
    <div className="container max-w-screen h-full">
        <div>
            <h1 className="h-[10vh] md:h-[20vh] w-full flex ml-3 md:pl-36 items-center text-2xl md:text-5xl font-semibold tracking-tight text-[#404040]">
                BreastCare Prediction
            </h1>
        </div>
        <div className='h-full w-full'>
                <form onSubmit={handleSubmit} className='h-full w-full'>
                    <p className='ml-3 md:ml-40 text-xs text-[#072AC8] font-semibold'>Note:</p>
                    <p className='ml-3 md:ml-40 text-xs text-[#072AC8] font-semibold'>All the required data is mandatory.</p>
                    <p className='ml-3 md:ml-40 text-xs text-[#072AC8] font-semibold mb-16'>Properly verify all the entered data, as faulty data may give faulty predictions.</p>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='radius_mean' className='w-56 text-sm text-[#404040] mb-2'>Radius mean *</label>
                            <input type="number" onChange={handleFormData} required name='radius_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='texture_mean' className='w-56 text-sm text-[#404040] mb-2'>Texture mean *</label>
                            <input type="number" onChange={handleFormData} required name='texture_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='perimeter_mean' className='w-56 text-sm text-[#404040] mb-2'>Perimeter mean *</label>
                            <input type="number" onChange={handleFormData} required name='perimeter_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='area_mean' className='w-56 text-sm text-[#404040] mb-2'>Area mean *</label>
                            <input type="number" onChange={handleFormData} required name='area_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='smoothness_mean' className='w-56 text-sm text-[#404040] mb-2'>Smoothness mean *</label>
                            <input type="number" onChange={handleFormData} required name='smoothness_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='compactness_mean' className='w-56 text-sm text-[#404040] mb-2'>Compactness mean *</label>
                            <input type="number" onChange={handleFormData} required name='compactness_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='concavity_mean' className='w-56 text-sm text-[#404040] mb-2'>Concavity mean *</label>
                            <input type="number" onChange={handleFormData} required name='concavity_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='concave_points_mean' className='w-56 text-sm text-[#404040] mb-2'>Concave points mean *</label>
                            <input type="number" onChange={handleFormData} required name='concave_points_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='symmetry_mean' className='w-56 text-sm text-[#404040] mb-2'>Symmetry mean *</label>
                            <input type="number" onChange={handleFormData} required name='symmetry_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='fractal_dimension_mean' className='w-56 text-sm text-[#404040] mb-2'>Fractal dimension mean *</label>
                            <input type="number" onChange={handleFormData} required name='fractal_dimension_mean' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='radius_se' className='w-56 text-sm text-[#404040] mb-2'>Radius se *</label>
                            <input type="number" onChange={handleFormData} required name='radius_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='texture_se' className='w-56 text-sm text-[#404040] mb-2'>Texture se *</label>
                            <input type="number" onChange={handleFormData} required name='texture_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='perimeter_se' className='w-56 text-sm text-[#404040] mb-2'>Perimeter se *</label>
                            <input type="number" onChange={handleFormData} required name='perimeter_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='area_se' className='w-56 text-sm text-[#404040] mb-2'>Area se *</label>
                            <input type="number" onChange={handleFormData} required name='area_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='smoothness_se' className='w-56 text-sm text-[#404040] mb-2'>Smoothness se *</label>
                            <input type="number" onChange={handleFormData} required name='smoothness_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='compactness_se' className='w-56 text-sm text-[#404040] mb-2'>Compactness se *</label>
                            <input type="number" onChange={handleFormData} required name='compactness_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='concavity_se' className='w-56 text-sm text-[#404040] mb-2'>Concavity se *</label>
                            <input type="number" onChange={handleFormData} required name='concavity_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='concave_points_se' className='w-56 text-sm text-[#404040] mb-2'>Concave ponits se *</label>
                            <input type="number" onChange={handleFormData} required name='concave_points_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='symmetry_se' className='w-56 text-sm text-[#404040] mb-2'>Symmetry se *</label>
                            <input type="number" onChange={handleFormData} required name='symmetry_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='fractal_dimension_se' className='w-56 text-sm text-[#404040] mb-2'>Fractal dimesion se*</label>
                            <input type="number" onChange={handleFormData} required name='fractal_dimension_se' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='radius_worst' className='w-56 text-sm text-[#404040] mb-2'>Radius worst *</label>
                            <input type="number" onChange={handleFormData} required name='radius_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='texture_worst' className='w-56 text-sm text-[#404040] mb-2'>Texture worst *</label>
                            <input type="number" onChange={handleFormData} required name='texture_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='perimeter_worst' className='w-56 text-sm text-[#404040] mb-2'>Perimeter worst *</label>
                            <input type="number" onChange={handleFormData} required name='perimeter_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='area_worst' className='w-56 text-sm text-[#404040] mb-2'>Area worst *</label>
                            <input type="number" onChange={handleFormData} required name='area_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='smoothness_worst' className='w-56 text-sm text-[#404040] mb-2'>Smoothness worst *</label>
                            <input type="number" onChange={handleFormData} required name='smoothness_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='compactness_worst' className='w-56 text-sm text-[#404040] mb-2'>Compactness worst *</label>
                            <input type="number" onChange={handleFormData} required name='compactness_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='concavity_worst' className='w-56 text-sm text-[#404040] mb-2'>Concavity worst *</label>
                            <input type="number" onChange={handleFormData} required name='concavity_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full ml-3 md:px-20 flex flex-col md:flex-row justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='concave_points_worst' className='w-56 text-sm text-[#404040] mb-2'>Concave points worst *</label>
                            <input type="number" onChange={handleFormData} required name='concave_points_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='symmetry_worst' className='w-56 text-sm text-[#404040] mb-2'>Symmetry worst *</label>
                            <input type="number" onChange={handleFormData} required name='symmetry_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <label id='fractal_dimension_worst' className='w-56 text-sm text-[#404040] mb-2'>Fractal dimension worst *</label>
                            <input type="number" onChange={handleFormData} required name='fractal_dimension_worst' className='h-8 w-56 text-sm text-[#404040] outline-none border rounded-md px-2 '/>
                        </div>
                    </div>
                    <div className='w-full px-20 flex justify-evenly mt-10'>
                        <div className='h-20 w-96 flex justify-center items-center flex-col'>
                            <button className='h-12 w-44 bg-[#072AC8] hover:opacity-80 rounded-lg text-white flex justify-center items-center'>Predict Cancer</button>
                        </div>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Prediction