import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { callGetSpecificAlbumApi, callPutAlbum } from "../api/AlbumAPI";


import Swal from "sweetalert2";


function ModifyAlbum () {

    const { albumCode } = useParams();
    const dispatch = useDispatch();

    const orgData = useSelector((state) => state.albums?.results?.album || []);
    const orgTitle = orgData?.title;
    const orgPrice = orgData?.albumPrice;
    const orgReleaseDate = orgData?.releaseDate;
    const orgGenre = orgData?.genre?.genreCode;
    const orgCover = orgData?.albumFile?.fileSavePath;

    const [ title, setTitle ] = useState(orgTitle);
    const [ price, setPrice ] = useState(orgPrice);
    const [ releaseDate, setReleaseDate ] = useState(orgReleaseDate);
    const [ genre, setGenre ] = useState(orgGenre);
    const [ cover, setCover ] = useState(orgCover);

    const navigate = useNavigate();
    const imageInput = useRef();
    const maxSizeInBytes = 1048576; // 1 MB
    const [ image, setImage ] = useState('');
    const [albumThumbnail, setAlbumThumbnail] = useState('');
    const [imageUrl, setImageUrl] = useState("/images/" + orgData?.albumFile?.fileSaveName || '');

    const [form, setForm] = useState({
        albumCode:  albumCode ,
        title: orgTitle,
        albumPrice: orgPrice,
        releaseDate: orgReleaseDate,
        genreCode: orgGenre,
    })

    console.log("albumCode? : ", albumCode);

    useEffect(
        () => {
            dispatch(callGetSpecificAlbumApi(albumCode));
            },[]
    );

    useEffect (
        () => {
            if(image) {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if( result ) {
                        setImageUrl(result);
                    }
                };
                fileReader.readAsDataURL(image);
            } else {
                setImageUrl("/images/" + orgData?.albumFile?.fileSaveName || '')
            }
        },
        [image, orgData?.albumFile?.fileSavePath]
    );

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

    const onChangeHandler = (e) => {
        switch(e.target.name) {
            case "title" :
                setTitle(e.target.value);
                break;
            case "albumPrice" :
                setPrice(e.target.value);
                break;
            case "releaseDate" :
                setReleaseDate(e.target.value);
                break;
            case "genreCode" :
                setGenre(e.target.value);
                break;
        }

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
        
        formData.append("albumCode", form.albumCode);
        formData.append("title", form.title);
        formData.append("albumPrice", form.albumPrice);
        formData.append("releaseDate", form.releaseDate);
        formData.append("genreCode", form.genreCode);

        if(image) {
            formData.append("imageFile", image);
        }

        console.log("imageFile? : ", image);

        console.log('[Album Registration]', formData.get("albumCode"));
        console.log('[Album Registration]', formData.get("title"));
        console.log('[Album Registration]', formData.get("albumPrice"));
        console.log('[Album Registration]', formData.get("releaseDate"));
        console.log('[Album Registration]', formData.get("genreCode"));

        dispatch(callPutAlbum({
            form: formData
        }));
        Swal.fire({
            icon: 'success',
            title: 'Sucessfully registered album!',
            confirmButtonColor: '#1D7151',
            iconColor: '#1D7151'
        });
        navigate(`/shop/${albumCode}`);
        //window.location.reload();
    }

    
    return(
        <div className="body-content">
        <div className="module">
            <h1>Edit Album</h1>
            <h2>{orgData.artist?.artistName}</h2><br />
            <form className="form" action="form.php" method="post" encType="multipart/form-data" autoComplete="off">
            <div className="alert alert-error"></div>
            <h4>title :</h4>
            <input 
                type="text" 
                onChange={ onChangeHandler } 
                value={title} 
                name="title" 
            required />
            <h4>price :</h4>
            <input 
                type="number" 
                onChange={ onChangeHandler } 
                placeholder="album price" 
                value={price}
                name="albumPrice" 
            required /><br/>
            <h4>genre :</h4>
            <select
                name="genreCode"
                onChange={ onChangeHandler }
                value={genre}
            >
                <option disabled>Pick a genre</option>
                <option value="1">Pop</option>
                <option value="2">R&B</option>
                <option value="3">Hip Hop</option>
                <option value="5">Rock</option>
                <option value="6">Electronice</option>
                <option value="7">Jazz</option>
                <option value="8">Country</option>
                <option value="9">Metal</option>
                <option value="10">Classic</option>
            </select>
            <label>release date</label><br/>
            <input 
                onChange={ onChangeHandler } 
                type="date" 
                value={releaseDate}
                name="releaseDate" 
                required /><br/>
            <label>cover <br/></label>
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
                style={{margin: 0.5+"rem"}}
            >change cover art
            </button><br/>
            { imageUrl && <img
                            style={{width: 20+"rem", height: 20+"rem"}}
                            src={ imageUrl || "/images" + orgData?.albumFile?.fileSaveName }
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

export default ModifyAlbum;