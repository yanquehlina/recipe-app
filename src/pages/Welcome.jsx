import welcomeImage from "../assets/images/welcome-img.png";

export default function Welcome() {
    return (
        <div>
            <h3 className="text-red-700">Savory & Sweet</h3>
            <img src={welcomeImage} alt="Welcome Image" />
        </div>
    );
}