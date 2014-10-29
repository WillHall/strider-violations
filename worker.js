var fs = require(fs)
/**
 * Helper methods for visualizer
 */
, visualizer = {
	checkFiles: function(config, job) {
		// _each(paths)
		// if (config.paths)
		job.violations['JSLint'] = true;
		return job;
	}
}
module.exports = {
  init: function (config, job, context, cb) {
		return cb(null, {
			listen: function (emitter, context) {
				emitter.on('job.status.phase.done', function (id, data) {
					return true;
				});
			}
		});
	},
};
