const commentFormHandler = async function(event) {
  event.preventDefault();
console.log("route hit")
  const postId = document.querySelector('input[name="post-id"]').value;
  const content = document.querySelector('textarea[name="comment-body"]').value;

  console.log(postId);
  console.log(content);
  if (content) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
console.log("run")
    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
