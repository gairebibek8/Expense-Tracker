const Actions = require("../model/Transactions");

// @desc     Get all transactions
// @route    GET  /api/v1/transactions
// @access   Public
exports.getActions = async (req, res, next) => {
    try {
        const actions = await Actions.find();

        return res.status(200).json({
            success: true,
            count: actions.length,
            data: actions
          });
        } catch (err) {
          return res.status(500).json({
            success: false,
            error: 'Server Error'
          });
        }
      }


// @desc     Add transactions
// @route    POST  /api/v1/transactions
// @access   Public
exports.addActions = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
    
        const actions = await Actions.create(req.body);
      
        return res.status(201).json({
          success: true,
          data: actions
        }); 
      } catch (err) {
        if(err.name === 'ValidationError') {
          const messages = Object.values(err.errors).map(val => val.message);
    
          return res.status(400).json({
            success: false,
            error: messages
          });
        } else {
          return res.status(500).json({
            success: false,
            error: 'Server Error'
          });
        }
      }

}


// @desc     Delete transaction
// @route    DELETE  /api/v1/transactions/:id
// @access   Public
exports.deleteActions = async (req, res, next) => {
    try {
        const actions = await Actions.findById(req.params.id);
    
        if(!actions) {
          return res.status(404).json({
            success: false,
            error: 'No transaction found'
          });
        }
    
        await actions.remove();
    
        return res.status(200).json({
          success: true,
          data: {}
        });
    
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }

}