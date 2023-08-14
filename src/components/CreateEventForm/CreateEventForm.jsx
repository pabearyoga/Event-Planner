import styles from './CreateEventForm.module.css';
import React, { useState, useEffect } from 'react';
import InputText from './InputText/InputText';
import InputTextarea from './InputTextarea/InputTextarea';
import InputFile from './InputFile/InputFile';
import SelectWrapper from './SelectWrapper/SelectWrapper';
import DatePickerInput from './Datepicker/DatepickerInput/DatepickerInput';
import TimePick from './TimePicker/TimePicker';

import { format } from 'date-fns';

const CreateEventForm = () => {



  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [photo, setPhoto] = useState(null);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
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
            case "date": 
                setShowDatePicker(prevShowDatePicker => !prevShowDatePicker)
                break;
            case "time": 
                setShowTimePicker(prevShowTimePicker => !prevShowTimePicker)
                break;
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

  const datePickerOnClose = () => {
    setDate('')
    setShowDatePicker(false)
  }

  const onSelectDate = (date) => {
    const formateDate = format(date, 'dd.MM.yyyy')
    setDate(formateDate)
    setShowDatePicker(false)
  }

  const onSelectTime = (time) => {
    setTime(time)
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

        <DatePickerInput
          label='Select date'
          name='date'
          handleSelectClick={handleInputChange}
          selectValue={date}
          showOption={showDatePicker}
          onClose={datePickerOnClose}
          onSelectDate={onSelectDate}
        />

        <TimePick
          label='Select time'
          name='time'
          handleInputChange={handleInputChange}
          selectValue={time}
          showOption={showTimePicker}
          onSelectTime={onSelectTime}

        />

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
