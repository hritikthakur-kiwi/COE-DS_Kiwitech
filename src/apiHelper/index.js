import axios from "axios"

export async function getAllBlogPosts() {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: '/api/blogs/getlist',
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function getBlogByID(ID) {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `/api/blogs/getone?id=${ID}`,
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data.blog;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function deleteBlogByID(ID) {
  try {
    const data = JSON.stringify({id: ID});
    const config = {
        method: 'DELETE',
      maxBodyLength: Infinity,
        url: `/api/blogs/delete`,
        headers: { 
          'Content-Type': 'application/json'
        }, 
        data
    };
    const response = await axios(config);
     return response.data.message;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function getAllUseCases() {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: '/api/case-studies/getlist',
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function getUseCaseByID(ID) {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `/api/case-studies/getone?id=${ID}`,
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data.caseStudies;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function deleteUseCaseByID(ID) {
  try {
    const data = JSON.stringify({id: ID});
    const config = {
        method: 'DELETE',
      maxBodyLength: Infinity,
        url: `/api/case-studies/delete`,
        headers: { 
          'Content-Type': 'application/json'
        }, 
        data
    };
    const response = await axios(config);
     return response.data.message;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function getAllTrending() {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: '/api/trending/getlist',
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data.trending;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function getTrendingByID(ID) {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `/api/trending/getone?id=${ID}`,
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data.trending;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function deleteTrendingByID(ID) {
  try {
    const data = JSON.stringify({id: ID});
    const config = {
        method: 'DELETE',
      maxBodyLength: Infinity,
        url: `/api/trending/delete`,
        headers: { 
          'Content-Type': 'application/json'
        }, 
        data
    };
    const response = await axios(config);
     return response.data.message;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function getAllEvents() {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: '/api/events/getlist',
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data.events;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function getEventsByID(ID) {
  try {
    const config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `/api/events/getone?id=${ID}`,
        headers: { 
          'Content-Type': 'application/json'
        }
    };
    const response = await axios(config);
     return response.data.event;
  } catch (err) {
    console.log("err", err.message);
  }
}  

export async function deleteEventsByID(ID) {
  try {
    const data = JSON.stringify({id: ID});
    const config = {
        method: 'DELETE',
      maxBodyLength: Infinity,
        url: `/api/events/delete`,
        headers: { 
          'Content-Type': 'application/json'
        }, 
        data
    };
    const response = await axios(config);
     return response.data.message;
  } catch (err) {
    console.log("err", err.message);
  }
}  
