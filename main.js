
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
	document.getElementById('fill_scope_up').style.display = 'block';
})


// transitions 


const ClScopeTo = document.getElementById('cl_scope_login').addEventListener('click', function () {
	const Password = document.getElementById('tr_scope').style.top = '32%';
	document.getElementById('tr_scope').style.zIndex = '1';
	document.getElementById('tr_scope').style.color = '#3063ad';
	const borders = document.getElementById('us_inp_control').style.border = '1px solid #3063ad';
	document.getElementById('tr_scope').style.transition = '.3s ease-out';
	document.getElementById('tr_scope').style.fontSize = '13px';
});
document.getElementById('cl_scope_login').addEventListener('mouseleave', () => {
	const Password = document.getElementById('tr_scope').style.top = '50%';
	document.getElementById('tr_scope').style.zIndex = '2';
	document.getElementById('tr_scope').style.color = '#94a7b9';
	const borders = document.getElementById('us_inp_control').style.border = '1px solid #c6d2dd';
	document.getElementById('tr_scope').style.transition = '.3s ease-out';
	document.getElementById('tr_scope').style.fontSize = '16px';
});

const ClScopeTo2 = document.getElementById('cl_scope_pass').addEventListener('click', function () {
	const Password = document.getElementById('tr_scope2').style.top = '32%';
	document.getElementById('tr_scope2').style.zIndex = '1';
	document.getElementById('tr_scope2').style.color = '#3063ad';
	const borders = document.getElementById('us_inp_control2').style.border = '1px solid #3063ad';
	document.getElementById('tr_scope2').style.transition = '.3s ease-out';
	document.getElementById('tr_scope2').style.fontSize = '13px';
});
document.getElementById('cl_scope_pass').addEventListener('mouseleave', () => {
	const Password = document.getElementById('tr_scope2').style.top = '50%';
	document.getElementById('tr_scope2').style.zIndex = '2';
	document.getElementById('tr_scope2').style.color = '#94a7b9';
	const borders = document.getElementById('us_inp_control2').style.border = '1px solid #c6d2dd';
	document.getElementById('tr_scope2').style.transition = '.3s ease-out';
	document.getElementById('tr_scope2').style.fontSize = '16px';
});


const Agreed = document.querySelector('agr_button');
const Button = document.getElementById('agreeButton').style.display = 'none';



function DelCross () {
	const NeccesUser = document.getElementById('fill_scope_up');
	document.getElementById('get_con').addEventListener('click', () => {
		document.getElementById('fill_scope_up').remove('fill_scope_up');
	})
}
DelCross();