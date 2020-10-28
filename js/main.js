//더보기 버튼 눌렀을때
function controll_show_more_btn(evt) {
  const hide_content = evt.target.previousSibling.previousSibling;
  const original_content = hide_content.previousSibling.previousSibling;
  if (evt.target.innerHTML === '더 보기') {
    original_content.innerHTML += hide_content.innerHTML;
    // hide_content.style.display = 'inline';
    evt.target.innerHTML = '숨기기';
  } else {
    original_content.innerHTML = original_content.innerHTML.slice(0, 60);
    // hide_content.style.display = 'none';
    evt.target.innerHTML = '더 보기';
  }
}

//피드 내용 넘 길면 숨긴다
function hide_feed_content() {
  const more_btn = document.querySelectorAll('.feed-content .feed-content-morebtn');
  const feed_contents = document.querySelectorAll('.feed-content .content');
  const feed_hidecontents = document.querySelectorAll('.feed-content .content-hide');
  feed_contents.forEach((content, idx) => {
    if (content.innerHTML.length > 60) {
      feed_hidecontents[idx].innerHTML = `${content.innerHTML.slice(60)}`;
      content.innerHTML = content.innerHTML.slice(0, 60);
      more_btn[idx].style.display = 'inline';
      //   console.log(feed_hidecontents[idx].innerHTML, feed_hidecontents[idx].innerHTML.length);
      more_btn[idx].addEventListener('click', (e) => {
        controll_show_more_btn(e); //생긴 더 보기 버튼에 이벤트리스너 달아줌
      });
    } else {
      more_btn[idx].style.display = 'none';
    }
  });
}

function init() {
  hide_feed_content();
}

init();
