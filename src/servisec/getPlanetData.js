import { 
    SWAPI_PARAM_PAGE, HTTP, HTTPS, SWAPI_ROOT, SWAPI_PLANETS, 
    GUIDE_IMG_EXTENSION, URL_IMG_PLANET
} from "../constans/api"

const getId = (url, SWAPI_PLANETS) => {
    const id = url.replace(HTTPS+SWAPI_ROOT+SWAPI_PLANETS, '')
    .replace(/\//g, "")

    return id;
}
export const getPlanetId = url => getId(url, SWAPI_PLANETS)
export const getPlanetImage = id => `${URL_IMG_PLANET}/${id+GUIDE_IMG_EXTENSION}`;