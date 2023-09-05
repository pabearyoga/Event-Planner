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
import { addEvent, updateEvent } from '../../utils/services/eventService';
import { useNavigate } from 'react-router-dom';


const CreateEventForm = ({event}) => {
  const idEvent = nanoid();
  const navigate = useNavigate();

  // data
  const [id, setId] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [photo, setPhoto] = useState('https://res.cloudinary.com/dnsiuzg5g/image/upload/v1693941808/default_kl2nn5.png');
  const [priority, setPriority] = useState('');

  // ShownInputItem
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

  const [showPopupRequiredFields, setShowPopupRequiredFields] = useState(false)

  // filling out the form fields when opening the Edit page
  useEffect(() => {
      if (!event) {
          return;
      }

      const { 
          name, 
          description, 
          category, 
          priority, 
          location, 
          date, 
          time, 
          photo 
      } = event;

      
      setTitle(name);
      setDescription(description);
      setDate(date);
      setTime(time);
      setLocation(location);
      setCategory(category);
      setPriority(priority);
      setPhoto(photo);

  }, [event]);  

  useEffect(() => {
    if (title && location && date && time && category && priority) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true);
    }
  }, [title, location, submitDisabled, date, time, category, priority]);
  
  useEffect(() => {
    setId(idEvent);
  }, []); 

  const priorityList = ['High', 'Medium', 'Low']
  const categoryList = ['Art', 'Music', 'Business', 'Conference', 'Workshop', 'Party', 'Sport', 'Other'] 
  
  const caseFilter = (item) => {
      if (!item) {
          return item;
      } else {
        return item.toLowerCase()
      }
}

  const data = {
    // id: id,
    eventId: id,
    name: title,
    description: description,
    category: caseFilter(category),
    priority: caseFilter(priority),
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
      case 'Other':
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
    const formateDate = format(date, 'dd.MM')
    setDate(formateDate)
    setShowDatePicker(false)
  }

  const onSelectTime = (time) => {
    const parsedTime = parse(time, 'hh:mm a', new Date());
    const formattedTime = format(parsedTime, 'HH:mm'); 
    setTime(formattedTime)
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
  };

  const notValidForm = (e) => {
    e.preventDefault();

    !title && setTitleValidation(false);
    !date && setDateValidation(false);
    !time && setTimeValidation(false);
    !location && setLocationValidation(false);
    !category && setCategoryValidation(false);
    !priority && setPriorityValidation(false);

    setShowPopupRequiredFields(true)
    setTimeout(() => {
      setShowPopupRequiredFields(false)
    }, 4000)
  }


  const formSubmit = (e) => {
    e.preventDefault();

    if (e.target.textContent === 'Save') {
      updateEvent(event.id, data)
    } else if (e.target.textContent === 'Add event') {

    setId('');
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
    setLocation('');
    setCategory('');
    setPhoto(null);
    setPriority('');
   addEvent(data);

    }
    navigate('/');
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
          selectValue={!category ? category : category.split("")[0].toUpperCase() + category.slice(1)}
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
          selectValue={!priority ? priority : priority.split("")[0].toUpperCase() + priority.slice(1)}
          showOption={showPriorities}
          optionList={priorityList}
          handleOptionSelect={handleOptionSelect}
        />

      </div>

      <div className={styles.submitBtnWrapper}>
        {submitDisabled ? 
          <Btn type={'submit'}  onClick={notValidForm} >Add event</Btn> :
          <Btn type={'submit'} onClick={formSubmit} >{!event ? 'Add event' : 'Save'}</Btn>
          }

      </div>

      {showPopupRequiredFields && <div className={styles.popup}>Please fill out all the required fields !</div>}
    </form>

  );
};

export default CreateEventForm;
