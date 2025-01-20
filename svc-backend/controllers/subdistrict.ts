import express from "express";
import { SubdistrictModel } from "../database/subdistricts";
import { CityModel } from "../database/cities";

export const getSubdistrict = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const city = await SubdistrictModel.find();
    return res.status(200).json(city).end;
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const getSubdistrictById = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];
    if (!id) {
      return res.status(400);
    }
    const city = await SubdistrictModel.findById(id);
    return res.status(200).json(city).end;
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const editSubdistrict = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];

    if (!id) {
      return res.status(400);
    }

    const values = req.body;

    const city = await SubdistrictModel.findByIdAndUpdate(id, values);

    return res.status(200).json(city).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const deleteSubdistrict = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];

    if (!id) {
      return res.status(400);
    }

    const city = await SubdistrictModel.findByIdAndDelete(id);

    return res.status(200).json(city).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const addSubdistrict = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const values = req.body;

    if (!values.city){
      return res.status(400)
    }

    const city = await new SubdistrictModel(values)
      .save()
      .then(doc => {
        console.log(doc);
    
        return CityModel.findByIdAndUpdate(
          values.city,
          { $push: { subdistricts: doc._id } },
          { new: true, useFindAndModify: false }
        );
      });

    return res.status(200).json(city).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
