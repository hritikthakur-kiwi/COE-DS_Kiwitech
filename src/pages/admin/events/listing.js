import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllEvents, deleteEventsByID } from '../../../apiHelper';

export default function UseCaseList() {
const [events, setEvents] = useState([]);
const deleteAction = async (id) => {
  const result = await deleteEventsByID(id);
  alert(result);
}

useEffect( () => {
(async () => {
    try {
    const response = await getAllEvents();
    setEvents(response);
    } catch (err) {
    setEvents([]);
    }
})()
}, []);

  return (
    <div className="grid">
      <Head>
        <title>UseCase listing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav>
            <ul className='ul-style'>
                <li> <h1>All Events</h1></li>
                <li><Link className='button-style' href="/admin/events/add">Add</Link></li>
            </ul>
        </nav>
        <div className="cards">
          {events?.map((one) => (
            <div key={one._id} className="card">
              <Link href={`/admin/events/edit/${one._id}`}>
                  <h2>{one.name}</h2>
                  <p className="date">{one.createdAt}</p>
              </Link>
              <button className='deleteButton' onClick={() => deleteAction(one._id)}>delete</button>
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
        }

        .card {
          background-color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          transition: box-shadow 0.2s ease-in-out;
        }

        .card:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .date {
          color: #999;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .excerpt {
          color: #555;
          font-size: 1rem;
          line-height: 1.5;
        }
        .ul-style {
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding: 0px 20px;
        }
        
        .button-style {
            display: block;
            list-style: none;
            text-decoration: none;
            color: #07102b;
            background: #fff;
            font-size: 16px;
            padding: 10px 30px;
            font-weight: 600;
        }
      `}</style>
    </div>
  )
}