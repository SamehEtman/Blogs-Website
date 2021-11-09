import { useEffect, useState } from 'react';
import Notification from '../ui/notification';
import classes from './contact-form.module.css';

const sendContactForm = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactDetails),
  });

  if (response.ok) return await response.json();
  const data = await response.json();
  throw new Error(data.message || 'Something went worng!');
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [notificationStatus, setNotificationStatus] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  useEffect(() => {
    if (notificationStatus === 'success' || notificationStatus === 'error') {
      const timeoutId = setTimeout(() => {
        setNotificationStatus(null);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [notificationStatus]);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const contactDetails = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };
    try {
      setNotificationStatus('pending');
      setNotificationMessage('Sending Email .... ');
      const data = await sendContactForm(contactDetails);
      console.log(data)
      setNotificationStatus('success');
      setNotificationMessage(data.message || 'Email sent!');
      setEnteredEmail('');
      setEnteredMessage('');
      setEnteredName('');
    } catch (err) {
      setNotificationStatus('error');
      setNotificationMessage(err.message || 'Something is worng !');
      setEnteredEmail('');
      setEnteredMessage('');
      setEnteredName('');
    }
  };

  let notification;
  if (notificationStatus === 'pending') {
    notification = {
      status: notificationStatus,
      message: notificationMessage,
      title: 'Sending Email',
    };
  }
  if (notificationStatus === 'error') {
    notification = {
      status: notificationStatus,
      message: notificationMessage,
      title: 'Error',
    };
  }
  if (notificationStatus === 'success') {
    notification = {
      status: notificationStatus,
      message: notificationMessage,
      title: 'Success',
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you ?</h1>
      <form className={classes.form} onSubmit={onFormSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message </button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
          changeStatus={setNotificationStatus}
        />
      )}
    </section>
  );
};

export default ContactForm;
