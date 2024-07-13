const profileListWrapper = document.querySelector('.profile-list-wrapper');
const profileList = document.querySelector('.profile-list');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

let currentIndex = 0;
const profileWidth = profileList.children[0].offsetWidth;
const maxIndex = profileList.children.length - 1;

function scrollToProfile(index) {
  const totalWidth = profileList.offsetWidth;
  const wrapperWidth = profileListWrapper.offsetWidth;
  const maxScroll = totalWidth - wrapperWidth;

  if (index < 0) {
    index = maxIndex;
    profileList.style.transform = `translateX(-${maxScroll}px)`;
  } else if (index > maxIndex) {
    index = 0;
    profileList.style.transform = `translateX(-${profileWidth}px)`;
  } else {
    profileList.style.transform = `translateX(-${index * profileWidth}px)`;
  }

  currentIndex = index;
}

scrollLeftBtn.addEventListener('click', () => {
  scrollToProfile(currentIndex - 1);
});

scrollRightBtn.addEventListener('click', () => {
  scrollToProfile(currentIndex + 1);
});
