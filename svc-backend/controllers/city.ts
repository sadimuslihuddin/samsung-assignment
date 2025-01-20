import express from "express";
import { CityModel } from "../database/cities";
import { ProvinceModel } from "../database/provinces";

export const getCity = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const city = await CityModel.find().populate("subdistricts").populate("province");
    return res.status(200).json(city).end;
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const getCityById = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];
    if (!id) {
      return res.status(400);
    }
    const city = await CityModel.findById(id).populate("subdistricts").populate("province");
    return res.status(200).json(city).end;
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const editCity = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];

    if (!id) {
      return res.status(400);
    }

    const values = req.body;

    const city = await CityModel.findByIdAndUpdate(id, values);

    return res.status(200).json(city).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const deleteCity = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];

    if (!id) {
      return res.status(400);
    }

    const city = await CityModel.findByIdAndDelete(id);

    return res.status(200).json(city).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const addCity = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const values = req.body;

    if (!values.province){
      return res.status(400)
    }

    const city = await new CityModel(values)
      .save()
      .then(doc => {
        console.log(doc);
    
        return ProvinceModel.findByIdAndUpdate(
          values.province,
          { $push: { cities: doc._id } },
          { new: true, useFindAndModify: false }
        );
      });

    return res.status(200).json(city).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
