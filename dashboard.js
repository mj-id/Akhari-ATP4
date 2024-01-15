document.title = "Dunia Akhari";

// sidebar menu
const sidebar = document.querySelectorAll(
  "aside .sidebar li a:not(aside .sidebar .subMenu li a)"
);

sidebar.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", () => {
    sidebar.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const dropdownToggle = document.getElementById("btn1");
const arrow = document.getElementById("bx2");

dropdownToggle.addEventListener("click", function () {
  const akhariTech = document.getElementById("dropdown");

  arrow.classList.toggle("rotate");
  if (arrow.classList.contains("rotate")) {
    console.log(akhariTech + "active");
    akhariTech.classList.add("show");
  } else {
    console.log(akhariTech + "disable");
    akhariTech.classList.remove("show");
  }
});

function showContent(contentName) {
  let allContent = document.querySelectorAll(
    "section .dashboard, section .proyek, section .pegawai, section .academy, section .esport"
  );

  allContent.forEach(function (menu) {
    menu.classList.add("hide");
  });

  let content = document.querySelector("." + contentName);
  console.log(content);
  if (content) {
    content.classList.remove("hide");
  }
}

// header
const manageAccount = document.querySelector("header .header-profile");
manageAccount.onclick = () => {
  console.log("aktif");
  console.log(manageAccount);
};

// dashboard content
$("#example").DataTable({
  order: [[3, "desc"]],
});

var options = {
  colors: ["#1664ca", "#388e3c"],

  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],

  title: {
    text: "Diagram Sources",
    style: {
      fontWeight: "bold",
      fontFamily: "Poppins",
    },
  },

  chart: {
    height: 350,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// manajemen proyek
$("#proyekTable").DataTable();

// manajemen pegawai
const Amember = document.getElementById("addMember");
const Amembers = document.querySelector(".addMembers");
Amember.onclick = () => {
  Amembers.classList.add("pop");
};

const Emember = document.getElementById("editMember");
const Emembers = document.querySelector(".editMembers");
Emember.onclick = () => {
  Emembers.classList.add("pop");
};

const cancels = document.getElementById("cancel");
cancels.onclick = () => {
  Amembers.classList.remove("pop");
};

const back = document.getElementById("back");
back.onclick = () => {
  Emembers.classList.remove("pop");
};

const viewMore = document.getElementById("viewMore");
const detailPegawai = document.querySelector(".detailPegawai");
viewMore.onclick = () => {
  console.log(detailPegawai);
  detailPegawai.classList.add("seen");
  Emembers.classList.remove("pop");
};

const batal = document.getElementById("batal");
batal.onclick = () => {
  detailPegawai.classList.remove("seen");
};

$("#editemployee").DataTable({
  scrollX: true,
  scrollY: 270,
});

$("#employeeTable").DataTable({
  scrollX: true,
  scrollY: 270,
});

// esport
const addPlayer = document.getElementById("addPlayer");
const showAddPlayer = document.querySelector(".addPlayer");
addPlayer.onclick = () => {
  console.log(showAddPlayer);
  showAddPlayer.classList.add("add");
};

const esportHome = document.getElementById("esportHome");
esportHome.onclick = () => {
  showAddPlayer.classList.remove("add");
};

$("#esport").DataTable({
  info: false,
  ordering: false,
  paging: false,
});
