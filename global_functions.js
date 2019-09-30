const pe = require('parse-error'); // parses error so you can read error message and handle them accordingly

executeOrThrow = function(promise) {
    return promise
        .then((data) => {
            return [null, data];
        })
        .catch((err) => [pe(err)]);
};

throwError = function(errMessage) {
    console.error(errMessage);
    throw new Error(errMessage);
};

returnError = function(res, err, code) {
    let error;

    if (typeof err == 'object' && typeof err.message != 'undefined') {
        error = err.message;
    }
    if (typeof code !== 'undefined') {
        res.statusCode = code;
    }
    return res.json({ success: false, error: error });
};

returnSuccessResponse = function(res, data, code) {
    let sendData = { success: true };

    if (typeof data == 'object') {
        sendData = Object.assign(data, sendData);
    }

    if (typeof code !== 'undefined') {
        res.statusCode = code;
    }

    return res.json(sendData);
};
