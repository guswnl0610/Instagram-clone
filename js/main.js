//navbar-search 돋보기 이동
function controll_navbar_search() {
  const navbar_input = document.querySelector('.nav-search input');
  const navbar_search_icon = document.querySelector('.search-icon');
  navbar_input.addEventListener('focus', () => {
    navbar_search_icon.classList.add('search-focused');
  });
  navbar_input.addEventListener('blur', () => {
    navbar_search_icon.classList.remove('search-focused');
  });
}

//add new comment on feed
function add_new_comment() {
  const comment_input = document.querySelector('.newcomment-input');
  if (comment_input.value.trim().length <= 0) return;
  const user_id = document.querySelector('.right-main .bio .id').innerHTML;
  const feed_comment = document.querySelector('.feed-comments');
  const post_btn = document.querySelector('.newcomment-form button');
  feed_comment.innerHTML += `
  <div class="comment">
    <div class="comment-left">
      <span class="id">${user_id}</span>
      <span>${comment_input.value}</span>
    </div>
    <img src="img/heart.png" alt="comment heart">
  </div>`;
  let comment_cnt = document.querySelector('.feed-comments').childElementCount;
  const comment_counter = document.querySelector('.comment-counter');
  comment_counter.innerHTML = `댓글 ${comment_cnt}개 모두 보기`;
  comment_input.value = '';
  post_btn.style.color = '#c0e0fc';
}

//newcomment input handler
function controll_newcomment_textarea() {
  const comment_input = document.querySelector('.newcomment-input');
  comment_input.addEventListener('keyup', (e) => {
    // const cur_comment_input = document.querySelector('.newcomment-input');
    const post_btn = document.querySelector('.newcomment-form button');

    let trimmed_comment = comment_input.value.trim();
    trimmed_comment.length > 0 ? (post_btn.style.color = '#0095f6') : (post_btn.style.color = '#c0e0fc');
    // console.log(trimmed_comment.length);
    // // enter keydown event
    // if (e.keyCode === 13) {
    //   add_new_comment();
    // }
  });
}

//newcomment button handler
function controll_newcomment_button() {
  const post_btn = document.querySelector('.newcomment-form button');
  post_btn.addEventListener('click', () => {
    add_new_comment();
  });
}

//newcomment form handler
function controll_form() {
  const comment_form = document.querySelector('.newcomment-form');
  comment_form.addEventListener('submit', (e) => {
    e.preventDefault();
    add_new_comment();
  });
}

function init() {
  controll_navbar_search();
  controll_newcomment_textarea();
  controll_newcomment_button();
  controll_form();
}

init();
