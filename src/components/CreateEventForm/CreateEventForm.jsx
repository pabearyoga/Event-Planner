import styles from './CreateEventForm.module.css';
import React, { useState, useEffect } from 'react';
// import DatePicker from './Datepicker/DatepickerCalendar/Datepicker'
import InputText from './InputText/InputText';
import InputTextarea from './InputTextarea/InputTextarea';
import InputFile from './InputFile/InputFile';
import SelectWrapper from './SelectWrapper/SelectWrapper';

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
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState('');

  // const [showDatePicker, setShowDatePicker] = useState(false);
  // const [showTimePicker, setShowTimePicker] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showPriorities, setShowPriorities] = useState(false);



    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "title": 
                setTitle(e.target.value);
                break;
            case "description": 
                setDescription(e.target.value);
                break;
            // case "date": 
            //     setDate(e.target.value);
            //     break;
            // case "time": 
            //     setTime(e.target.value);
            //     break;
            case "location": 
                setLocation(e.target.value);
                break;
            case "category": 
                setShowCategories(prevShowPriorities => !prevShowPriorities)
                break;
            case "photo": 
                setPhoto(e.target.files[0]);
                break;
            case 'priority':
                setShowPriorities(prevShowPriorities => !prevShowPriorities)
                break;
            default: 
                return;
        }
      
    }
  


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };



  const handleOptionSelect = (e) => {
    switch (e.target.name) {
      case 'Hight': 
      case 'Medium': 
      case 'Low': 
        setPriority(e.target.name)
        setShowPriorities(prevShowPriorities => !prevShowPriorities)

          break;
      case 'Art': 
      case 'Music': 
      case 'Business': 
      case 'Conference': 
      case 'Workshop': 
      case 'Party': 
      case 'Sport': 
          setCategory(e.target.name)
          setShowCategories(prevShowPriorities => !prevShowPriorities)
          break;
      default: 
          return;
    }
  }

  const priorityList = ['Hight', 'Medium', 'Low']

  const categoryList = ['Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport']



  return (
      <form className={styles.form} onSubmit={handleSubmit}>
          
      <div className={styles.wrapper}>
        <InputText
          label='Title'
          name='title'
          inputValue={title}
          handleInputChange={handleInputChange}
          onClick={() => setTitle('')}
        />

        <InputTextarea
          label='Description'
          name='description'
          inputValue={description}
          handleInputChange={handleInputChange}
          onClick={() => setDescription('')}
        />

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

        <InputText
          label='Location'
          name='location'
          inputValue={location}
          handleInputChange={handleInputChange}
          onClick={() => setLocation('')}
        />

        <SelectWrapper
          label='Category'
          name='category'
          handleSelectClick={handleInputChange}
          selectValue={category}
          showOption={showCategories}
          optionList={categoryList}
          handleOptionSelect={handleOptionSelect}
        />
            
        <InputFile
          label='Add picture'
          inputValue={photo ? photo.name : ''}
          handleInputChange={handleInputChange}
          onClick={() =>  setPhoto('')}
        />

        <SelectWrapper
          label='Priority'
          name='priority'
          handleSelectClick={handleInputChange}
          selectValue={priority}
          showOption={showPriorities}
          optionList={priorityList}
          handleOptionSelect={handleOptionSelect}
        />

          </div>



      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default CreateEventForm;
