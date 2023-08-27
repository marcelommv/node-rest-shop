const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Pegando endereco de products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'POST para products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'Achou id produto especial',
            id: id
        });
    }
    else{
        res.status(200).json({
            message: 'Você passou um ID'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'produto atualizado'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'produto deletado'
    });
});

module.exports = router;