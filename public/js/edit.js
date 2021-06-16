const postId = document.querySelector('input[name="post-id"]').value;
console.log(postId);

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('textarea[name="post-title"]').value;
  const contents = document.querySelector('textarea[name="post-contents"]').value;
console.log(postId);
  console.log(title);
   console.log(contents);

  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      contents
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('click', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
