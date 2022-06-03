import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const MyProfile = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const name = user?.displayName;
    const { isLoading, error, data: loginUser } = useQuery('loginUser', () =>
        fetch(`https://thawing-atoll-26359.herokuapp.com/login/${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    if (error) {
        return 'An error has occurred: ' + error.message
    }
    const { img, link, religion, location, nationality } = loginUser;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar ">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img ? img : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt='' />
                    </div>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{link ? link : 'No profile link'}</p>
                <p>Religion: {religion ? religion : 'No religion'}</p>
                <p>Nationality: {nationality ? nationality : 'No nationality'}</p>
                <p>Location: {location ? location : 'No location'}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate('updateProfile')} className="btn btn-primary capitalize">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;