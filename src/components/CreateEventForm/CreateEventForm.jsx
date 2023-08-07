import styles from './CreateEventForm.module.css';
import React, { useState, useEffect } from 'react';
// import DatePicker from './Datepicker/DatepickerCalendar/Datepicker'
import {IoIosClose} from 'react-icons/io'
import InputText from './InputText/InputText';

const CreateEventForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   description: '',
  //   category: '',
  //   priority: '',
  //   location: '',
  //   date: '',
  //   time: '',
  //   photo: null,
  // });


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [photo, setPhoto] = useState('');

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "title": 
                setTitle(e.target.value);
                break;
            case "description": 
                setDescription(e.target.value);
                break;
            // case "location": 
            //     setPlace(e.target.value);
            //     break;
            // case "category": 
            //     setCategory(e.target.value);
            //     break;
            // case "priority": 
            //     setPriority(e.target.value);
            //     break;
            default: 
                return;
        }
    }
  
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const refreshClick = () => {
    setTitle('')
  }

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
          
      <div className={styles.wrapper}>
        <InputText
          label='Title'
          inputValue={title}
          handleInputChange={ handleInputChange}
          onClick={refreshClick}
          />
                {/* <div className={styles.inputWrapper}>
                    <label className={styles.label}>Title</label>
                    <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                    className={styles.input}
                    />
                    <button className={styles.refreshBtn} onClick={() => setTitle('')} ><IoIosClose size={24} color='var(--accent)'/></button>
                </div> */}
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Description</label>
                    <textarea
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    className={styles.input}
                    ></textarea>
                </div>            

                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Select date</label>
                    <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleInputChange}
                    className={styles.input}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Select time:</label>
                    <input
                    type="time"
                    name="time"
                    value={time}
                    onChange={handleInputChange}
                    className={styles.input}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Location</label>
                    <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                    className={styles.input}
                    />
                </div>            
            
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Category:</label>
                    <select name="category" value={category} onChange={handleInputChange} className={styles.input}>
                    <option value="">Select category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    </select>
                </div>
                <div className={styles.inputWrapper}>
                  <label className={styles.label}>Add picture</label>
                  <div className={styles.fileInputWrapper}>                 
                        <input className={styles.input} type="file" accept="image/*" name="photo" onChange={handlePictureChange} />
                  </div>
                </div>
                <div className={styles.inputWrapper}>
                    <label className={styles.label}>Priority</label>
                    <select name="priority" value={priority} onChange={handleInputChange} className={styles.input}>
                    <option value="">Select priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    </select>
                </div>
          </div>



      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default CreateEventForm;
