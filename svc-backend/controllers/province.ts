import express from "express";
import { ProvinceModel } from "../database/provinces";

export const getProvince = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const province = await ProvinceModel.find().populate("cities");
    return res.status(200).json(province).end;
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const getProvinceById = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];
    if (!id) {
      return res.status(400);
    }
    const province = await ProvinceModel.findById(id).populate("cities");
    return res.status(200).json(province).end;
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const editProvince = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];

    if (!id) {
      return res.status(400);
    }

    const values = req.body;

    const province = await ProvinceModel.findByIdAndUpdate(id, values);

    return res.status(200).json(province).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const deleteProvince = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const id = req.params["id"];

    if (!id) {
      return res.status(400);
    }

    const province = await ProvinceModel.findByIdAndDelete(id);

    return res.status(200).json(province).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const addProvince = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const values = req.body;

    const province = await new ProvinceModel(values)
      .save()
      .then((province) => province.toObject());

    return res.status(200).json(province).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
