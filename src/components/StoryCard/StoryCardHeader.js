import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    actions: {
        display: "flex"
    },
    avatar: {
        backgroundColor: red[500]
    },
    card: {
        marginBottom: 24
    }
});

function CategoryDisplay(props) {
    const categoryChoice = props.categoryChoice;
    console.log(categoryChoice)
    switch (categoryChoice) {
        case "Big Story":
            return ( <div>
            B
            </div>
        );
        case "Medium Story":
            return ( <div>
            M
            </div>
        );
        case "Small Story":
            return ( <div>
            S
            </div>
        );
        default:
            return (
                <div>
                NA
                </div>
        )
    }      
}

class StoryCardHeader extends React.Component {
    render() {
        const { classes } = this.props;
        const { data } = this.props;

        return (
            <CardHeader
                avatar={
                    <Avatar aria-label="Logo" className={classes.avatar}>
                        <CategoryDisplay categoryChoice={data.category} />
                    </Avatar>
                }

                // action={
                //     <IconButton>
                //       <MoreVertIcon />
                //     </IconButton>
                // }

                title={data.essentialQuestion}
                subheader={data.updated}
            />
        )
    }
}

StoryCardHeader.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(StoryCardHeader);