import React,{ Component } from 'react'
import { render } from 'react-dom'

import Paper from 'material-ui/Paper'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

const styleSheet = createStyleSheet(theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
}))

@withStyles(styleSheet)
export default class talk extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell numeric>Calories</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </Paper>
            </div>
        )
    }
}