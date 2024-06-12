"use client";
import { useState } from 'react';

export default function CreateEventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        date,
        user_id: parseInt(userId),
      }),
    });

    if (response.ok) {
      console.log('Event created successfully');
    } else {
      const errorData = await response.json();
      console.error('Error creating event:', errorData);
    }

    // Reset form
    setTitle('');
    setDescription('');
    setDate('');
    setUserId('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Create Event</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">User ID</label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Create Event</button>
    </form>
  );
}
