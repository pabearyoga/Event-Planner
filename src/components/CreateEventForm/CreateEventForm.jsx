import styles from './CreateEventForm.module.css';
import React, { useState, useEffect } from 'react';
import InputText from './InputText/InputText';
import InputTextarea from './InputTextarea/InputTextarea';
import InputFile from './InputFile/InputFile';
import SelectWrapper from './SelectWrapper/SelectWrapper';
import DatePickerInput from './Datepicker/DatepickerInput/DatepickerInput';
import TimePick from './TimePicker/TimePicker';
import { Btn } from '../Btn/Btn';
import { nanoid } from 'nanoid'
import { parse, format } from 'date-fns';
import { addEvent } from '../../utils/services/eventService';
// import { addEvent, updateEvent, deleteEvent, getAllEvents } from '../../utils/services/eventService';
import { useNavigate } from 'react-router-dom';


const CreateEventForm = () => {
  const idEvent = nanoid();
   const navigate = useNavigate();

  // const [redirectToHome, setRedirectToHome] = useState(false)
  const [id, setId] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState('default');
  const [priority, setPriority] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showPriorities, setShowPriorities] = useState(false);

          // InputValidation
  const [titleValidation, setTitleValidation] = useState(true);
  const [dateValidation, setDateValidation] = useState(true);
  const [timeValidation, setTimeValidation] = useState(true);
  const [locationValidation, setLocationValidation] = useState(true);
  const [categoryValidation, setCategoryValidation] = useState(true);
  const [priorityValidation, setPriorityValidation] = useState(true);

  const [submitDisabled, setSubmitDisabled] = useState(true)



  const data = {
    id: id,
    name: title,
    description: description,
    category: category.toLowerCase(),
    priority: priority.toLowerCase(),
    location: location,
    date: date,
    time: time,
    photo: photo
  }




  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "title":
        // titleInputValidation
        setTitleValidation(/^[A-Za-zА-Яа-яЁё]+$/.test(e.target.value))
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDateValidation(true)
        setShowDatePicker(prevShowDatePicker => !prevShowDatePicker)
        setShowTimePicker(false)
        setShowCategories(false)
        setShowPriorities(false)
        break;
      case "time":
        setTimeValidation(true)
        setShowTimePicker(prevShowTimePicker => !prevShowTimePicker)
        setShowDatePicker(false)
        setShowCategories(false)
        setShowPriorities(false)
        break;
      case "location":
        setLocationValidation(/^[A-Za-zА-Яа-яЁё]+$/.test(e.target.value))
        setLocation(e.target.value);
        break;
      case "category":
        setCategoryValidation(true)
        setShowCategories(prevShowPriorities => !prevShowPriorities)
        setShowTimePicker(false)
        setShowDatePicker(false)
        setShowPriorities(false)
        break;
      case "photo":
        setPhoto(e.target.files[0]);
        break;
      case 'priority':
        setPriorityValidation(true)
        setShowPriorities(prevShowPriorities => !prevShowPriorities)
        setShowCategories(false)
        setShowTimePicker(false)
        setShowDatePicker(false)
        break;
      default:
        return;
    }
      
  }
  

  const handleOptionSelect = (e) => {
    switch (e.target.name) {
      case 'High':
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
    
    const parsedTime = parse(time, 'hh:mm a', new Date());
    const formattedTime = format(parsedTime, 'HH:mm');
    
    setTime(formattedTime)

  }

  const priorityList = ['High', 'Medium', 'Low']
  const categoryList = ['Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport']


  useEffect(() => {
    if (title && location && date && time && category && priority) {
      setSubmitDisabled(false)
      // console.log(submitDisabled)
    } else {
      setSubmitDisabled(true);
      // console.log(submitDisabled)
    }
  }, [title, location, submitDisabled, date, time, category, priority]);
  

  const handleSubmit = (e) => {
    e.preventDefault();    

  };

  useEffect(() => {
    setId(idEvent);
  }, []); 

  const formSubmit = (e) => {
    e.preventDefault();

    addEvent(data)

    setId('');
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
    setCategory('');
    setPhoto(null);
    setPriority('');



    // setRedirectToHome(true)
    navigate('/');
  }

  const notValidForm = (e) => {
    e.preventDefault();

    !title && setTitleValidation(false);
    !date && setDateValidation(false);
    !time && setTimeValidation(false);
    !location && setLocationValidation(false);
    !category && setCategoryValidation(false);
    !priority && setPriorityValidation(false);
  }

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
          
      <div className={styles.wrapper}>
        <InputText
          label='Title'
          name='title'
          validation={titleValidation}
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
          validation={dateValidation}
          handleSelectClick={handleInputChange}
          selectValue={date}
          showOption={showDatePicker}
          onClose={datePickerOnClose}
          onSelectDate={onSelectDate}
        />

        <TimePick
          label='Select time'
          name='time'
          validation={timeValidation}
          handleInputChange={handleInputChange}
          selectValue={time}
          showOption={showTimePicker}
          onSelectTime={onSelectTime}

        />

        <InputText
          label='Location'
          name='location'
          validation={locationValidation}
          inputValue={location}
          handleInputChange={handleInputChange}
          onClick={() => setLocation('')}
        />

        <SelectWrapper
          label='Category'
          name='category'
          validation={categoryValidation}
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
          validation={priorityValidation}
          handleSelectClick={handleInputChange}
          selectValue={priority}
          showOption={showPriorities}
          optionList={priorityList}
          handleOptionSelect={handleOptionSelect}
        />

      </div>

      <div className={styles.submitBtnWrapper}>
        {submitDisabled ? 
          <Btn type={'submit'}  onClick={notValidForm} >Add event</Btn> :
          <Btn type={'submit'}  onClick={formSubmit} >Add event</Btn>
          }

      </div>

    </form>
  );
};

export default CreateEventForm;
