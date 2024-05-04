import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForums } from '../slices/forumSlice';

const ForumList = () => {
  const dispatch = useDispatch();
  const { forums } = useSelector(state => state.forum);

  useEffect(() => {
    dispatch(fetchForums());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {forums.map(forum => (
          <div className="col-md-8 mt-3" key={forum._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h2 className="card-title">{forum.title}</h2>
                <p className="card-text h6">{forum.name} | {forum.created_at}</p>
                <p className="card-text">{forum.body.slice(0, 200)}</p>
                <input type="hidden" name='row_value' value={forum._id} />
                <a className='btn btn-primary' href={`post_detail/${forum._id}`}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumList;