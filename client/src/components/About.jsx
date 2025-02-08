
const About = () => {
    return (
        <div className="about p-6 bg-gray-100 text-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-center">About Workout Planner</h1>
            <p className="mb-4">
                Welcome to Workout Planner! Our app is designed to help you plan and track your workouts efficiently. Whether you are a beginner or a seasoned athlete, our app provides the tools you need to stay on top of your fitness goals.
            </p>
            <p className="mb-2 font-semibold">Features of Workout Planner:</p>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-1">Create and customize workout plans</li>
                <li className="mb-1">Track your progress over time</li>
                <li className="mb-1">Access a library of exercises with detailed instructions</li>
                <li className="mb-1">Set and achieve your fitness goals</li>
            </ul>
            <p className="font-semibold">
                Join our community and start your fitness journey today!
            </p>
        </div>
    );
};

export default About;