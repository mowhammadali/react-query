import { useQuery } from 'react-query';
import axios from 'axios';

const Count = () => {
    const query = useQuery('courses' , fetchCourse , { cacheTime: 5000 });
    const { data } = query;

    async function fetchCourse () {
        try {
            const response = await axios.get('http://localhost:3001/courses');
            return response;
        }
        catch (err) {
            return err.message;
        }
    }

    return data?.data?.length;
}

export default Count;