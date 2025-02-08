import { useEffect, useState } from "react";

function App() {    
    const [image, setImage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    useEffect(() => {
        const apiCall = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
                const data = await response.json();
                console.log(data);
                if (data) {
                    const { name, gender, phone, picture } = data.results[0];
                    const { first, last } = name;
                    setFirstName(first);
                    setLastName(last);
                    setGender(gender);
                    setPhonenumber(phone);
                    setImage(picture.large);
                } else {
                    console.error('Data is null or undefined');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        apiCall();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="bg-blue-100 p-6 rounded-lg shadow-2xl w-[500px] h-[250px]">
                <div className="flex w-full h-full items-center space-x-10">
                    <img src={image} alt="Random User" className="w-40 h-40 rounded-lg border-4 border-blue-500 shadow-lg" />
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold text-gray-900">{firstName} {lastName}</h2>
                        <p className="text-lg font-medium text-gray-700 capitalize">{gender}</p>
                        <p className="text-lg font-medium text-gray-700">{phonenumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
