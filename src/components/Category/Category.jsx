import css from './Category.module.css';


const Category = () => {
    return (           
        <select className={css.select}>
            <option selected disabled>Category</option>
            <option value='Art'>Art</option>
            <option value='Music'>Music</option>
            <option value='Business'>Business</option>
            <option value='Conference'>Conference</option>
            <option value='Workshop'>Workshop</option>
            <option value='Party'>Party</option>
            <option value='Sport'>Sport</option>
        </select>   
    )
    
};

export default Category;