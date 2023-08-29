
// Selecting Organizations 


const ShowCont = document.getElementById("main_set_cit").style.display = 'none'
const GetwIND = document.getElementById('get_con').addEventListener('click', () => {
	document.getElementById("main_set_cit").style.display = 'block';
	document.getElementById('get_con').style.borderBottomRightRadius = '0px'
	document.getElementById('get_con').style.borderBottomLeftRadius = '0px'
})
document.getElementById('get_con').addEventListener('mouseleave', () => {
	document.getElementById("main_set_cit").style.display = 'none';
	document.getElementById('get_con').style.borderBottomRightRadius = '4px'
	document.getElementById('get_con').style.borderBottomLeftRadius = '4px'
})

// transitions 


// const ClScopeTo = document.getElementById('cl_scope_login').addEventListener('click', function () {
// 	const Password = document.getElementById('tr_scope').style.top = '46%';
// 	document.getElementById('tr_scope').style.zIndex = '1';
// 	document.getElementById('tr_scope').style.color = '#3063ad';
// 	const borders = document.getElementById('us_inp_control').style.border = '1px solid #3063ad';
// });
// document.getElementById('cl_scope_login').addEventListener('mouseleave', () => {
// 	const Password = document.getElementById('tr_scope').style.top = '58%';
// 	document.getElementById('tr_scope').style.zIndex = '2';
// 	document.getElementById('tr_scope').style.color = '#94a7b9';
// 	const borders = document.getElementById('us_inp_control').style.border = '1px solid #c6d2dd';
// });

// const ClScopeTo2 = document.getElementById('cl_scope_pass').addEventListener('click', function () {
// 	const Password = document.getElementById('tr_scope2').style.top = '58%';
// 	document.getElementById('tr_scope2').style.zIndex = '1';
// 	document.getElementById('tr_scope2').style.color = '#3063ad';
// 	const borders = document.getElementById('us_inp_control2').style.border = '1px solid #3063ad';
// });
// document.getElementById('cl_scope_pass').addEventListener('mouseleave', () => {
// 	const Password = document.getElementById('tr_scope2').style.top = '38%';
// 	document.getElementById('tr_scope2').style.zIndex = '2';
// 	document.getElementById('tr_scope2').style.color = '#94a7b9';
// 	const borders = document.getElementById('us_inp_control2').style.border = '1px solid #c6d2dd';
// });

const Agreed = document.getElementById('agr_button').addEventListener('click', () => {
	const Buttton = document.getElementById('agreeButton').style.display = 'block';
})
// const Agreed2 = document.getElementById('agr_button').addEventListener('click', () => {
// 	document.getElementById('agr_button').remove('agreeButton');
// })