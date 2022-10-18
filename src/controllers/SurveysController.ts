import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {SurveyRepository} from "../repositories/SurveysRepository";


class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        const surveysRepository =  getCustomRepository(SurveyRepository)

        const survey = surveysRepository.create({
            title,
            description
        });
        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }
}

export { SurveysController }