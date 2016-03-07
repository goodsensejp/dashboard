import {ValidationError, ModelNotFoundError, ForbiddenError, UnauthorizedError} from 'src/server/errors';
import PrettyError = require('pretty-error');

export class ErrorHandler {
	logErrors(err, req, res, next) {
		let pe = new PrettyError();
		var renderedError = pe.render(err);
		console.log(renderedError);
		next(err);
	}

	response(err, req, res, next) {
		if(err instanceof ValidationError)
		{
			this.handleValidationError(res, err);
		}
		else if(err instanceof ModelNotFoundError)
		{
			this.handleModelNotFound(res, err);
		}
		else if(err instanceof UnauthorizedError)
		{
			this.handleUnauthorizedError(res, err);
		}
		else if(err instanceof ForbiddenError)
		{
			this.handleForbiddenError(res, err);
		}
		else
		{
			this.handleUnknownError(res, err);
		}
	}

	private handleUnknownError(res, err) {
		res.status(500).send({
			error: {
				type: "unknown",
				description: "Unknown error",
				message: err.message || `Something went wrong, That's all we know!`
			}
		});
	}

	private handleForbiddenError(res, err) {
		res.status(403).send({
			error: {
				type: "forbidden",
				description: "Forbidden error",
				message: err.message || `You are not authorized to make this request`
			}
		});
	}

	private handleUnauthorizedError(res, err) {
		res.status(401).send({
			error: {
				type: "unauthorized",
				description: "Unauthorized error",
				message: err.message || `You must login to make this request`
			}
		});
	}

	private handleModelNotFound(res, err) {
		res.status(404).send({
			error: {
				type: "notfound",
				description: "Model not found",
				message: `Model with id ${err.getId()} not found`
			}
		});
	}

	private handleValidationError(res, err) {
		res.status(400).send({
			error: {
				type: "validation",
				description: "Validation error",
				message: err.getMessages()
			}
		});
	}
}