import { Application } from '../models/application.js';
import { appendApplication } from '../services/googleSheets.js';

export const createApplication = async (req, res) => {
  const body = req.body;
  const application = await Application.create(body);

  try {
    await appendApplication(application);
    application.syncStatus = 'synced';
    await application.save();
  } catch (error) {
    console.error(
      `Failed to sync application ${application._id} to Google Sheets:`,
      error.message,
    );
    application.syncStatus = 'failed';
    await application.save();
  }

  return res.status(201).json(application);
};
