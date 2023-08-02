import css from './SortBy.module.css';


const SortBy = () => {
    return (           
        <select className={css.select}>
            <option selected disabled>Sort by</option>
            <option value='by name +'>by name +</option>
            <option value='by name -'>by name -</option>
            <option value='by data +'>by data +</option>
            <option value='by data -'>by data -</option>
            <option value='by priority +'>by priority +</option>
            <option value='by priority -'>by priority -</option>
        </select>   
    )
    
};

export default SortBy;