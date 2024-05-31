import React, {useEffect, useState} from 'react';
import './App.scss';
import {CoursesPage} from "./pages";
import {fetchCourses, IData} from './api/api';
import {getAllUniqueTags} from "./common/utils/getAllUniqueTags";


function App() {
    const [courses, setCourses] = useState<IData[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await fetchCourses();
                setCourses(data);
                setTags([...getAllUniqueTags(data)]);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <div className="app">
            <CoursesPage tags={tags} courses={courses}/>
        </div>
    );
}

export default App;