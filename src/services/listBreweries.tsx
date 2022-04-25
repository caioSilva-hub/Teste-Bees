import { useEffect, useState } from 'react'
import axios from 'axios'

const Breweries = () => {
    const [search, setSearch] = useState()

    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries', {
            headers: {},
        })
            .then((preview) => {
                setSearch(preview.data);
            });
    }, []);
    return search
}
export default Breweries
