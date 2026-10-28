// 버튼을 클릭해서 이동하고 애니메이션 주기
const link = () => {
    document.querySelectorAll(".header_nav ul li a").forEach(function (li) {
        li.addEventListener("click", function (e) {
            e.preventDefault(); // #의 기본 기능을 차단
            document.querySelector(li.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); // a 링크의 애니메이션 만들기
        });
    });
};

export default link;
