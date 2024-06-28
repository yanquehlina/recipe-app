import welcomeImage from "../assets/images/welcome-img.png";
// import welcomeBackgroundImage from "../assets/images/welcome-background-img.png"; the ideal

export default function Welcome() {
    return (
        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/welcome-background-img.png')] bg-cover h-screen bg-center flex flex-col Class
Properties
place-content-center">
            <h3 className="text-white text-4xl">Savory & Sweet</h3>
            <img src={welcomeImage} alt="Welcome Image" />
        </div>
    );
}

// alternatively, you can use the arrow function like this;
// const Welcome = () => {
//   return (
//     <div>Welcome</div>
//   )
// }

// export default Welcome