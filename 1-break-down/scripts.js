// Number(String(input).replace("12", ""));

function trace() {
	// read & clean user input
	var a_type = document.getElementById("s0-type").value;
	var a_value = document.getElementById("s0-value").value;
	var a = cast(s0_type, s0_value);
	
	var b_type = document.getElementById("s0-type").value;
	var b_value = document.getElementById("s0-value").value;
	var b = cast(s0_type, s0_value);
	
	var c_type = document.getElementById("s0-type").value;
	var c_value = document.getElementById("s0-value").value;
	var c = cast(s0_type, s0_value);
	
	var d_type = document.getElementById("s0-type").value;
	var d_value = document.getElementById("s0-value").value;
	var d = cast(s0_type, s0_value);
	
	var e_type = document.getElementById("s0-type").value;
	var e_value = document.getElementById("s0-value").value;
	var e = cast(s0_type, s0_value);
	
	var s0 = { 
		a: {type: typeof a, value: a},
		b: {type: typeof b, value: b},
		c: {type: typeof c, value: c},
		b: {type: typeof d, value: d},
		e: {type: typeof e, value: e}
	};

	var expected_type = document.getElementById("expected-type").value;
	var expected_value = document.getElementById("expected-value").value;
	var expected = cast(expected_type, expected_value);


	// do the logic
	var s1;
	try {
		s1 = a > b;
	} catch(err) {
		throw(err);
	};

	var s2;
	try {
		s2 = c >= d;
	} catch(err) {
		throw(err);
	};
	
	var s3;
	try {
		s3 = s1 && s2;
	} catch(err) {
		throw(err);
	};

	var sf;
	try {
		sf = e || s3;
	} catch(err) {
		throw(err);
	};

	// display to user
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = JSON.stringify(s0);

	var s1_display = document.getElementById("s1");
	s1_display.innerHTML = typeof s1 + ": " + s1;

	var s2_display = document.getElementById("s2");
	s2_display.innerHTML = typeof s2 + ": " + s2;
	
	var s3_display = document.getElementById("s3");
	s3_display.innerHTML = typeof s3 + ": " + s3;

	var sf_display = document.getElementById("sf");
	sf_display.innerHTML = typeof sf + ": " + sf;

	console.assert(expected === sf, [{expected: expected}, {actual: sf}] );
};

function cast(type, value) {

	if (type == "Number") {
    	return Number(value);

    } else if (type == "String") {
    	return value;

    } else if (type == "Null") {
    	return null;

    } else if (type == "Boolean") {
    	// why is this not quite right?
    	return Boolean(value);
    };
    // functions return undefined by default
};

function clear_table() {
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = "";

	var s1_display = document.getElementById("s1");
	s1_display.innerHTML = "";

	var s2_display = document.getElementById("s2");
	s2_display.innerHTML = "";

	var sf_display = document.getElementById("sf");
	sf_display.innerHTML = "";
};
