import { useSelector } from 'react-redux';

const CreatePlan = () => {
    const { userInfo } = useSelector((state) => state.auth);

return(
<div class="container-fluid px-0">
    <div class="container py-4">
    <form method="post" action="/c_forum">
    {/* {% csrf_token %} */}
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" placeholder="Enter Your Name" />
        </div>

        <div class="mb-3">
          <label for="topic" class="form-label">Topic</label>
          <input type="text" class="form-control" id="topic" name="topic" placeholder="Enter Your Topic Name" />
        </div>

        <div class="mb-3">
          <label for="category" class="form-label">Category</label>
          <input type="text" class="form-control" id="category" name="category" placeholder="Enter your Category" />
        </div>

        <div class="mb-3">
          <label for="body" class="form-label">Body</label>
          <textarea type="desc" class="form-control" id="body" name="body"></textarea>
        </div>

        <button type="submit" class="btn btn-primary" href="forum_index">Submit</button>
      </form>

    </div>
</div>
)}
    export default CreatePlan;