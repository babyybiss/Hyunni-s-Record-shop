import style from '../assets/css/form.css'
import { useRef, useState, useEffect } from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { callPostAlbum } from '../api/AlbumAPI';

function RegistAlbum () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const imageInput = useRef();
    const maxSizeInBytes = 1048576; // 1 MB
    const [ image, setImage ] = useState('');
    const [albumThumbnail, setAlbumThumbnail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [form, setForm] = useState({
        title: '',
        albumPrice: 0,
        artistName: '',
        releaseDate: '',
        genreCode: 0
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.name === "genreCode" ? parseInt(e.target.value, 10) : e.target.value
        });
    };
    
    const onClickImageUpload = () => {
        imageInput.current.click();
    }

    const onClickRegisterAlbumHandler = () => {
        console.log('[Album Registration] onClickRegisterAlbumHandler');

        const formData = new FormData();
        
        formData.append("title", form.title);
        formData.append("albumPrice", form.albumPrice);
        formData.append("artistName", form.artistName);
        formData.append("releaseDate", form.releaseDate);
        formData.append("genreCode", form.genreCode);

        if(image) {
            formData.append("imageFile", image);
        }

        console.log("imageFile? : ", image);

        console.log('[Album Registration]', formData.get("title"));
        console.log('[Album Registration]', formData.get("albumPrice"));
        console.log('[Album Registration]', formData.get("artistName"));
        console.log('[Album Registration]', formData.get("releaseDate"));
        console.log('[Album Registration]', formData.get("genreCode"));

        dispatch(callPostAlbum({
            form: formData
        }));
        Swal.fire({
            icon: 'success',
            title: 'Sucessfully registered album!',
            confirmButtonColor: '#1D7151',
            iconColor: '#1D7151'
        });
        //navigate('/shop');
        //window.location.reload();
    }

    const onChangeImageUpload = (e) => {
        const image = e.target.files[0];

        if(image.size > maxSizeInBytes) {
            Swal.fire({
                icon: 'warning',
                title: "이미지 용량이 1MB를 초과합니다.",
                confirmButtonColor: '#1D7151',
                iconColor: '#1D7151'
            });
            return;
        } else (
            setImage(image)
        );
    };

    useEffect (
        () => {
            if(image) {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if( result ) {
                        setImageUrl(result);
                    }
                }
                fileReader.readAsDataURL(image);
            }


        },
        [image]
    );


    return(
        <div className="body-content">
        <div className="module">
            <h1>Register an album</h1>
            <form className="form" action="form.php" method="post" encType="multipart/form-data" autoComplete="off">
            <div className="alert alert-error"></div>
            <input type="text" onChange={ onChangeHandler } placeholder="album title" name="title" required />
            <input type="text" onChange={ onChangeHandler } placeholder="artist name" name="artistName" required />
            <input type="number" onChange={ onChangeHandler } placeholder="album price" name="albumPrice" required /><br/>
            <select
                name="genreCode"
                onChange={ onChangeHandler }
            >
                <option value="1">pop</option>
                <option value="2">hiphop</option>
                <option value="3">R&B</option>
                <option value="4">pop</option>
                <option value="5">pop</option>
                <option value="6">pop</option>
                <option value="7">pop</option>
                <option value="8">pop</option>
                <option value="9">pop</option>
                <option value="10">pop</option>
            </select>
            <label>album release date</label><br/><input onChange={ onChangeHandler } type="date" name="releaseDate" required /><br/>
            <label>album cover <br/></label>
            <input 
                style={ { display: 'none' }}
                type="file" 
                name="albumThumbnail" 
                onChange={ onChangeImageUpload }
                ref={ imageInput }
                value={albumThumbnail} 
                accept='image/jpg,image/png,image/jpeg,image/gif' 
                required 
            />
            <button 
                onClick={ onClickImageUpload }
                className="button button-primary"
            >upload cover art
            </button>
            { imageUrl && <img
                                style={{width: 20+"rem", height: 20+"rem"}}
                                src={ imageUrl }
                                alt="preview"
                            />}
            <button onClick={ onClickRegisterAlbumHandler } 
            className="btn btn-block btn-primary">
                Register
            </button>
            </form>
        </div>
        </div>
    );
}

export default RegistAlbum;

/*
<input type="password" placeholder="Password" name="password" autocomplete="new-password" required />
      <input type="password" placeholder="Confirm Password" name="confirmpassword" autocomplete="new-password" required />
*/