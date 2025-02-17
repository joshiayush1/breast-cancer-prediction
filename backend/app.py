from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import numpy as np
import pickle
import os

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Configuration
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'patients.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True

# Initialize Database
db = SQLAlchemy(app)

# Define Patient Model
class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    radius_mean = db.Column(db.Float, nullable=False)
    texture_mean = db.Column(db.Float, nullable=False)
    perimeter_mean = db.Column(db.Float, nullable=False)
    area_mean = db.Column(db.Float, nullable=False)
    smoothness_mean = db.Column(db.Float, nullable=False)
    compactness_mean = db.Column(db.Float, nullable=False)
    concavity_mean = db.Column(db.Float, nullable=False)
    concave_points_mean = db.Column(db.Float, nullable=False)
    symmetry_mean = db.Column(db.Float, nullable=False)
    fractal_dimension_mean = db.Column(db.Float, nullable=False)
    radius_se = db.Column(db.Float, nullable=False)
    texture_se = db.Column(db.Float, nullable=False)
    perimeter_se = db.Column(db.Float, nullable=False)
    area_se = db.Column(db.Float, nullable=False)
    smoothness_se = db.Column(db.Float, nullable=False)
    compactness_se = db.Column(db.Float, nullable=False)
    concavity_se = db.Column(db.Float, nullable=False)
    concave_points_se = db.Column(db.Float, nullable=False)
    symmetry_se = db.Column(db.Float, nullable=False)
    fractal_dimension_se = db.Column(db.Float, nullable=False)
    radius_worst = db.Column(db.Float, nullable=False)
    texture_worst = db.Column(db.Float, nullable=False)
    perimeter_worst = db.Column(db.Float, nullable=False)
    area_worst = db.Column(db.Float, nullable=False)
    smoothness_worst = db.Column(db.Float, nullable=False)
    compactness_worst = db.Column(db.Float, nullable=False)
    concavity_worst = db.Column(db.Float, nullable=False)
    concave_points_worst = db.Column(db.Float, nullable=False)
    symmetry_worst = db.Column(db.Float, nullable=False)
    fractal_dimension_worst = db.Column(db.Float, nullable=False)
    prediction = db.Column(db.String(50), nullable=False) 

# Load ML Model
MODEL_PATH = os.path.join(BASE_DIR, 'models', 'gnb_model.pkl')
with open('public/gnb_model.pkl', 'rb') as file:
    gnb_model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        features_raw = data['features']
        sample_data = np.array(features_raw, dtype=float).reshape(1, -1)
        prediction_numeric = gnb_model.predict(sample_data)[0]
        result = "Malignant Tumor" if prediction_numeric == 0 else "Benign"

        # Save data to DB
        new_patient = Patient(
            radius_mean=features_raw[0], texture_mean=features_raw[1],
            perimeter_mean=features_raw[2], area_mean=features_raw[3],
            smoothness_mean=features_raw[4], compactness_mean=features_raw[5],
            concavity_mean=features_raw[6], concave_points_mean=features_raw[7],
            symmetry_mean=features_raw[8], fractal_dimension_mean=features_raw[9],
            radius_se=features_raw[10], texture_se=features_raw[11],
            perimeter_se=features_raw[12], area_se=features_raw[13],
            smoothness_se=features_raw[14], compactness_se=features_raw[15],
            concavity_se=features_raw[16], concave_points_se=features_raw[17],
            symmetry_se=features_raw[18], fractal_dimension_se=features_raw[19],
            radius_worst=features_raw[20], texture_worst=features_raw[21],
            perimeter_worst=features_raw[22], area_worst=features_raw[23],
            smoothness_worst=features_raw[24], compactness_worst=features_raw[25],
            concavity_worst=features_raw[26], concave_points_worst=features_raw[27],
            symmetry_worst=features_raw[28], fractal_dimension_worst=features_raw[29],
            prediction=result
        )
        db.session.add(new_patient)
        db.session.commit()

        return jsonify({"prediction": result})

    except Exception as e:
        print("Error during prediction:", e)
        return jsonify({"error": str(e)}), 500


@app.route('/patients/history', methods=['GET'])
def get_patient_history():
    try:
        # Get the last 3 patients
        patients = Patient.query.order_by(Patient.id.desc()).limit(3).all()
        patient_data = [
            {
                "id": patient.id,
                "prediction": patient.prediction,
            }
            for patient in patients
        ]
        return jsonify(patient_data)
    except Exception as e:
        print("Error fetching patient history:", e)
        return jsonify({"error": str(e)}), 500



@app.route('/patients/all', methods=['GET'])
def get_all_patients():
    try:
        patients = Patient.query.all()
        
        for patient in patients:
            print(f"ID: {patient.id}, Radius Mean: {patient.radius_mean}, Texture Mean: {patient.texture_mean}, "
                  f"Perimeter Mean: {patient.perimeter_mean}, Area Mean: {patient.area_mean}, Prediction: {patient.prediction}")

        return jsonify([{
            "id": p.id,
            "radius_mean": p.radius_mean,
            "texture_mean": p.texture_mean,
            "perimeter_mean": p.perimeter_mean,
            "area_mean": p.area_mean,
            "smoothness_mean": p.smoothness_mean,
            "compactness_mean": p.compactness_mean,
            "concavity_mean": p.concavity_mean,
            "concave_points_mean": p.concave_points_mean,
            "symmetry_mean": p.symmetry_mean,
            "fractal_dimension_mean": p.fractal_dimension_mean,
            "radius_se": p.radius_se,
            "texture_se": p.texture_se,
            "perimeter_se": p.perimeter_se,
            "area_se": p.area_se,
            "smoothness_se": p.smoothness_se,
            "compactness_se": p.compactness_se,
            "concavity_se": p.concavity_se,
            "concave_points_se": p.concave_points_se,
            "symmetry_se": p.symmetry_se,
            "fractal_dimension_se": p.fractal_dimension_se,
            "radius_worst": p.radius_worst,
            "texture_worst": p.texture_worst,
            "perimeter_worst": p.perimeter_worst,
            "area_worst": p.area_worst,
            "smoothness_worst": p.smoothness_worst,
            "compactness_worst": p.compactness_worst,
            "concavity_worst": p.concavity_worst,
            "concave_points_worst": p.concave_points_worst,
            "symmetry_worst": p.symmetry_worst,
            "fractal_dimension_worst": p.fractal_dimension_worst,
            "prediction": p.prediction
        } for p in patients])
    
    except Exception as e:
        print("Error fetching all patients:", e)
        return jsonify({"error": str(e)}), 500




if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
