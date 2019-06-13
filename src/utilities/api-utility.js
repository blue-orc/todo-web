import axios from "axios";
import { Notify } from 'quasar'
// Request has controller, action, queryParameters, body

export default {
    async del(request) {
        var uri = buildUri(request);
        try {
            var response = await axios.delete(uri);
            console.log(response.data);
            return response
        } catch (error) {
            console.error(error.response);
            Notify.create(error.response.status + ": " + error.response.data)
            return error.response
        }
    },
    async get(request) {
        var uri = buildUri(request);
        try {
            var response = await axios.get(uri);
            console.log(response.data);
            return response
        } catch (error) {
            console.error(error.response);
            Notify.create(error.response.status + ": " + error.response.data)
            return error.response
        }
    },
    async post(request, body) {
        console.log("request body", body);
        var uri = buildUri(request);
        if (request.accept) {
            var config = {
                headers: {
                    accept: request.accept
                }
            };
        }
        try {
            var response = await axios.post(uri, body, config);
            console.log(response.data);
            return response
        } catch (error) {
            console.log(error.response)
            Notify.create(error.response.status + ": " + error.response.data)
            return error.response
        }
    },
    async postForm(request, formObject) {
        var entries = Object.entries(formObject);
        var bodyFormData = new FormData()
        for (var entry of entries) {
            bodyFormData.set(entry[0], entry[1])
        }
        console.log("request body", body);
        var uri = buildUri(request);
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        try {
            var response = await axios.post(uri, bodyFormData, config);
            console.log(response.data);
            return response
        } catch (error) {
            console.error(error.response);
            Notify.create(error.response.status + ": " + error.response.data)
            return error.response
        }
    },
    async put(request, body) {
        var uri = buildUri(request);
        try {
            console.log("request body", body);
            var response = await axios.put(uri, body);
            console.log(response.data);
            return response
        } catch (error) {
            console.error(error.response);
            Notify.create(error.response.status + ": " + error.response.data)
            return error.response
        }
    }
};

function buildUri(request) {
    var uri = process.env.VUE_APP_API_URI;
    uri = uri + "/" + request.controller;
    if (request.action !== undefined) {
        uri = uri + "/" + request.action;
    }
    if (request.queryParameters !== undefined) {
        uri = uri + "?";
        var entries = Object.entries(request.queryParameters);
        for (var i=0; i<entries.length; i++) {
            if (i == entries.length -1){
                uri = uri + entries[i][0] + "=" + entries[i][1]
            } else {
                uri = uri + entries[i][0] + "=" + entries[i][1] + "&"
            }
        }
    }
    console.log(uri);
    return uri;
}
